export const sampleOrders = [
  {
    orderId: 'ORD001',
    userId: 'USR1001',
    products: [
      { productId: 'P1001', name: 'Wireless Mouse', quantity: 2, price: 25.99 },
      { productId: 'P1005', name: 'USB-C Cable', quantity: 1, price: 9.99 },
    ],
    totalAmount: 61.97,
    status: 'processing',
    placedAt: '2025-07-17T10:15:00Z',
  },
  {
    orderId: 'ORD002',
    userId: 'USR1002',
    products: [
      {
        productId: 'P1002',
        name: 'Mechanical Keyboard',
        quantity: 1,
        price: 89.99,
      },
    ],
    totalAmount: 89.99,
    status: 'shipped',
    placedAt: '2025-07-16T14:30:00Z',
  },
  {
    orderId: 'ORD003',
    userId: 'USR1003',
    products: [
      {
        productId: 'P1003',
        name: '27-inch Monitor',
        quantity: 1,
        price: 199.99,
      },
      { productId: 'P1006', name: 'HDMI Cable', quantity: 2, price: 12.5 },
    ],
    totalAmount: 224.99,
    status: 'delivered',
    placedAt: '2025-07-15T09:45:00Z',
  },
  {
    orderId: 'ORD004',
    userId: 'USR1004',
    products: [
      { productId: 'P1004', name: 'Gaming Headset', quantity: 1, price: 59.99 },
    ],
    totalAmount: 59.99,
    status: 'cancelled',
    placedAt: '2025-07-14T17:20:00Z',
  },
  {
    orderId: 'ORD005',
    userId: 'USR1001',
    products: [
      { productId: 'P1007', name: 'Laptop Stand', quantity: 1, price: 39.99 },
      {
        productId: 'P1008',
        name: 'Wireless Charger',
        quantity: 1,
        price: 29.99,
      },
    ],
    totalAmount: 69.98,
    status: 'processing',
    placedAt: '2025-07-17T12:00:00Z',
  },
];
