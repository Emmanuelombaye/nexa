interface IngredientRow {
  name: string
  amount: string
  dailyValue: string
}

interface ProductFacts {
  servingSize: string
  servingsPerContainer: number | string
  netQuantity: string
  ingredients: IngredientRow[]
  otherIngredients: string
}

interface SupplementFactsPanelProps {
  product: ProductFacts
}

export default function SupplementFactsPanel({ product }: SupplementFactsPanelProps) {
  return (
    <div className="supplement-facts">
      <div className="supplement-facts__header">
        <p className="supplement-facts__title">Supplement Facts</p>
        <p>
          <strong>Serving size:</strong> {product.servingSize}
        </p>
        <p>
          <strong>Servings per container:</strong> {product.servingsPerContainer}
        </p>
        <p>
          <strong>Net quantity:</strong> {product.netQuantity}
        </p>
      </div>

      <table className="supplement-facts__table">
        <thead>
          <tr>
            <th scope="col">Ingredient</th>
            <th scope="col">Amount</th>
            <th scope="col">% Daily Value</th>
          </tr>
        </thead>
        <tbody>
          {product.ingredients.map((row: IngredientRow) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.amount}</td>
              <td>{row.dailyValue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="supplement-facts__other">{product.otherIngredients}</p>
    </div>
  )
}
