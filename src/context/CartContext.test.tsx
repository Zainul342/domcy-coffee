import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import React from 'react';

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CartProvider>{children}</CartProvider>
);

describe('CartContext', () => {
    it('should initialize with an empty cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });
        expect(result.current.items).toEqual([]);
        expect(result.current.totalItems).toBe(0);
    });

    it('should add items to the cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });
        const item = { id: '1', name: 'Kopi Susu', price: 15000, category: 'kopsu' };

        act(() => {
            result.current.addToCart(item);
        });

        expect(result.current.items).toHaveLength(1);
        expect(result.current.items[0]).toMatchObject(item);
        expect(result.current.items[0].quantity).toBe(1);
        expect(result.current.totalItems).toBe(1);
    });

    it('should increment quantity when adding the same item', () => {
        const { result } = renderHook(() => useCart(), { wrapper });
        const item = { id: '1', name: 'Kopi Susu', price: 15000, category: 'kopsu' };

        act(() => {
            result.current.addToCart(item);
            result.current.addToCart(item);
        });

        expect(result.current.items).toHaveLength(1);
        expect(result.current.items[0].quantity).toBe(2);
        expect(result.current.totalItems).toBe(2);
    });

    it('should remove items from the cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });
        const item = { id: '1', name: 'Kopi Susu', price: 15000, category: 'kopsu' };

        act(() => {
            result.current.addToCart(item);
            result.current.removeFromCart('1');
        });

        expect(result.current.items).toHaveLength(0);
        expect(result.current.totalItems).toBe(0);
    });

    it('should clear the cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });
        const item = { id: '1', name: 'Kopi Susu', price: 15000, category: 'kopsu' };

        act(() => {
            result.current.addToCart(item);
            result.current.clearCart();
        });

        expect(result.current.items).toHaveLength(0);
        expect(result.current.totalItems).toBe(0);
    });
});
