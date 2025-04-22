function processOrder(order) {
    if (order.totalAmount > 100 && order.isPaid) return "Order confirmed."
    else if (order.itemsCount > 10 || order.hasDiscount === true) return "Special Order"
    else if (order.customerType === "premium" || order.customerType === "vip" && order.deliveryAddress !== null) return "Priority delivery."
    else if (order.status === "cancelled") return "Order cancelled."
    else return "Order pending."
}

console.log(processOrder({ totalAmount: 120, isPaid: true})) // Output: "Order confirmed."
console.log(processOrder({ totalAmount: 50, isPaid: false, itemsCount: 15, hasDiscount: true, customerType: "regular", deliveryAddress: null, status: "pending" })) // Output: "Special Order"