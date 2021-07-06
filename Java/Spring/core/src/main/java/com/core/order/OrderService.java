package com.core.order;

public interface OrderService {
    Order createOrder(Long memberID, String itemName, int itemPrice);
}
