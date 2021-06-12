(function() {
  'use strict';


describe("order.js", function() {
  describe("takeOrder", function() {
    it("should be a function", function() {
      expect(takeOrder).to.be.a('function');
    });

    it("should add new orders to an order type list", function() {
      var order1 = {
        orderNumber: 1,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [];

      takeOrder(order1, deliveryOrders);
      takeOrder(order2, deliveryOrders);

      expect(deliveryOrders[0]).to.equal(order1);
      expect(deliveryOrders[1]).to.equal(order2);
    });

    it("should add another order to an order type list", function () {

      var order1 = {
        orderNumber: 1,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 3,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var takeOutOrders = [order1];

      takeOrder(order2, takeOutOrders);
      takeOrder(order3, takeOutOrders);

      expect(takeOutOrders[0]).to.equal(order1);
      expect(takeOutOrders[1]).to.equal(order2);
      expect(takeOutOrders[2]).to.equal(order3);
    });

    it("should not be able to hold more than 3 orders at a time", function() {
      var order1 = {
        orderNumber: 12342,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 12472,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 3789,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order4 = {
        orderNumber: 864,
        item: "garden salad",
        price: "6.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2];

      takeOrder(order3, deliveryOrders);
      takeOrder(order4, deliveryOrders);

      expect(deliveryOrders.length).to.equal(3);
      expect(deliveryOrders).to.deep.equal([order1, order2, order3]);
    });
  }); 

  describe("refundOrder", function() {
    it("should be a function", function () {
      expect(refundOrder).to.be.a('function');
    });

    it("should remove an order by order number", function() {
      var order1 = {
        orderNumber: 1657,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 221,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 923,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2, order3];

      refundOrder(1657, deliveryOrders);

      expect(deliveryOrders.length).to.equal(2);
      expect(deliveryOrders).to.deep.equal([order2, order3])
    });

    it("should remove a different order by order number", function () {
      var order1 = {
        orderNumber: 1241,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2893,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 456,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2, order3];

      refundOrder(2893, deliveryOrders);

      expect(deliveryOrders.length).to.equal(2);
      expect(deliveryOrders).to.deep.equal([order1, order3])
    });
  });

  describe("listOrders", function() {
    it("should be a function", function () {
      expect(listItems).to.be.a('function');
    });

    it("should list out all of the order items by name", function() {
      var order1 = {
        orderNumber: 1,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 3,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2, order3];
      var items = listItems(deliveryOrders);

      expect(items).to.equal("burger, blt sandwich, rueben");
    });

    it("should list out different order items by name", function () {
      var order1 = {
        orderNumber: 3,
        item: "grilled cheese",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 20,
        item: "turkey and swiss",
        price: "6.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 4,
        item: "veggie burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var orders1 = [order1];
      var orders2 = [order2, order3];

      var items1 = listItems(orders1);
      var items2 = listItems(orders2);

      expect(items1).to.deep.equal("grilled cheese");
      expect(items2).to.deep.equal("turkey and swiss, veggie burger");
    });
  });

  describe("searchOrder", function() {
    it("should be a function", function () {
      expect(searchOrder).to.be.a('function');
    });

    it("should tell us if an order is in the list", function() {
      var order1 = {
        orderNumber: 1234,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2342,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2];

      expect(searchOrder(deliveryOrders, "burger")).to.equal(true);
      expect(searchOrder(deliveryOrders, "sushi")).to.equal(false);
      expect(searchOrder(deliveryOrders, "blt sandwich")).to.equal(true);
    });

    it("should tell us if an order is in another list", function () {
      var order1 = {
        orderNumber: 6357,
        item: "mac and cheese",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 65389,
        item: "bagel and cream cheese",
        price: "2.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 99853,
        item: "spaghetti",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order4 = {
        orderNumber: 23522,
        item: "chicken parmesean",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order5 = {
        orderNumber: 86432,
        item: "french toast",
        price: "7.99",
        orderType: "delivery",
        status: "accepted"
      };

      var orders1 = [order1, order2];
      var orders2 = [order2, order3, order4];
      var orders3 = [order1, order2, order3, order4, order5]

      expect(searchOrder(orders1, "mac and cheese")).to.equal(true);
      expect(searchOrder(orders1, "hawaiian pizza")).to.equal(false);
      expect(searchOrder(orders2, "bagel and cream cheese")).to.equal(true);
      expect(searchOrder(orders2, "cheese pizza")).to.equal(false);
      expect(searchOrder(orders3, "bagel and cream cheese")).to.equal(true);
      expect(searchOrder(orders3, "french toast")).to.equal(true);
      expect(searchOrder(orders3, "breakfast burrito")).to.equal(false);
    });
  });
});

}());