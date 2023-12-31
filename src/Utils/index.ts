export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acum, currentItem) => {
    if (currentItem.prices.current) {
      return (acum += currentItem.prices.current)
    }
    return 0
  }, 0)
}
