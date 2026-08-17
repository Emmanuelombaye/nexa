'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface PatientSession {
  email?: string
}

interface IntakeDraft {
  name?: string
  email?: string
  program?: string
}

type PatientOrder = {
  id: string
  status: string
  clinicalStatus: string
  productName: string
  trackingNumber: string
  carrier: string
  createdAt: string
}

function formatClinicalStatus(value: string) {
  return value.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

function formatOrderStatus(value: string) {
  return value.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

export default function PatientCenter() {
  const [session, setSession] = useState<PatientSession | null>(null)
  const [draft, setDraft] = useState<IntakeDraft | null>(null)
  const [paid, setPaid] = useState(false)
  const [orders, setOrders] = useState<PatientOrder[]>([])
  const [ordersLoading, setOrdersLoading] = useState(false)
  const [ordersError, setOrdersError] = useState('')

  useEffect(() => {
    try {
      setSession(JSON.parse(localStorage.getItem('nexa_session_v2') || 'null'))
      setDraft(JSON.parse(localStorage.getItem('nexa_intake_draft_v2') || 'null'))
      const checkout = JSON.parse(localStorage.getItem('nexa_checkout_status_v1') || 'null') as { paid?: boolean } | null
      setPaid(Boolean(checkout?.paid))
    } catch {
      setSession(null)
      setDraft(null)
      setPaid(false)
    }
  }, [])

  const lookupEmail = (draft?.email || session?.email || '').trim()

  useEffect(() => {
    if (!lookupEmail) return
    let cancelled = false
    setOrdersLoading(true)
    setOrdersError('')
    let orderId = ''
    try {
      orderId = localStorage.getItem('nexa_order_id_v1') || ''
    } catch {
      orderId = ''
    }
    const params = new URLSearchParams({ email: lookupEmail })
    if (orderId) params.set('orderId', orderId)
    fetch(`/api/orders?${params.toString()}`)
      .then(async (res) => {
        const data = (await res.json().catch(() => ({}))) as { orders?: PatientOrder[]; error?: string }
        if (cancelled) return
        if (!res.ok) {
          setOrders([])
          setOrdersError(data.error || 'We could not load your orders right now.')
          return
        }
        setOrders(Array.isArray(data.orders) ? data.orders : [])
      })
      .catch(() => {
        if (!cancelled) {
          setOrders([])
          setOrdersError('We could not load your orders right now.')
        }
      })
      .finally(() => {
        if (!cancelled) setOrdersLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [lookupEmail])

  if (!session && !draft) {
    return (
      <div className="portal-empty">
        <h1>Patient Center</h1>
        <p>Complete eligibility and checkout first. Patient Center opens after payment.</p>
        <div className="flow-nav">
          <Link href="/check-eligibility" className="btn btn--primary">
            Check Eligibility
          </Link>
        </div>
      </div>
    )
  }

  const name = draft?.name?.split(' ')[0] || session?.email?.split('@')[0] || 'Member'
  const program = draft?.program || 'Your care plan'
  const latestOrder = orders[0]

  return (
    <div className="portal">
      <main className="container portal__main">
        <section className="portal-hero">
          <p className="eyebrow">Patient Center</p>
          <h1>Welcome back, {name}.</h1>
          <p>Your clinician review status and next steps live here.</p>
        </section>
        <div className="portal-grid">
          <article className="portal-card">
            <h2>Current program</h2>
            <p className="portal-stat">{latestOrder?.productName || program}</p>
            <span className="pill">{paid ? 'Payment received' : 'Pending clinician review'}</span>
          </article>
          <article className="portal-card">
            <h2>Clinical review</h2>
            <p className="portal-stat">
              {latestOrder ? formatClinicalStatus(latestOrder.clinicalStatus) : paid ? 'In review' : 'Pending'}
            </p>
            <p>
              {paid
                ? 'A licensed clinician will review your intake. Watch your email for updates, typically within 24 hours.*'
                : 'Watch your email for review updates. Typical review window is within 24 hours.*'}
            </p>
          </article>
          <article className="portal-card portal-card--wide">
            <h2>Orders &amp; tracking</h2>
            {ordersLoading && <p>Loading your orders…</p>}
            {!ordersLoading && ordersError && <p>{ordersError}</p>}
            {!ordersLoading && !ordersError && orders.length === 0 && (
              <p>No orders found yet for this device. Complete checkout to see clinician review and shipping updates here.</p>
            )}
            {!ordersLoading && orders.length > 0 && (
              <ul className="portal-order-list">
                {orders.map((order) => (
                  <li key={order.id || `${order.productName}-${order.createdAt}`} className="portal-order-item">
                    <div>
                      <strong>{order.productName}</strong>
                      <p>
                        Order {formatOrderStatus(order.status)} · Clinical {formatClinicalStatus(order.clinicalStatus)}
                      </p>
                    </div>
                    {order.trackingNumber ? (
                      <p className="portal-order-tracking">
                        {order.carrier ? `${order.carrier}: ` : 'Tracking: '}
                        {order.trackingNumber}
                      </p>
                    ) : (
                      <p className="portal-order-tracking">Tracking will appear after fulfillment.</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </article>
          <article className="portal-card portal-card--wide">
            <h2>Care team</h2>
            <p>
              Your care forms and health information are stored securely. Affiliated clinicians review details to determine if treatment is appropriate for you.
            </p>
          </article>
        </div>
      </main>
    </div>
  )
}
