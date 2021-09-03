const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  
  
//   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".)
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
  const address = 'address';
  const names = order['name'];
  const deliveryPerson = order.order.delivery.deliveryPerson ;
  const phone = order['phoneNumber'];
  const street = order[address].street;
  const number= order [address].number;
  const apartment= order[address].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para ${names}, Telefone: ${phone}, ${street},Número: ${number}, Apartamento ${apartment}.`)

  
  }
  
  customerInfo(order);
  
//   Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drink =  order.order.drinks.coke.type;
  const newPrice= order.payment.total = '50,00';

  console.log (`Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é de ${newPrice} reais`)
  }
  orderModifier(order);