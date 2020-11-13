import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import FizzBuzz from '../fizzBuzz/FizzBuzz'
import {
  getNumbers,
  isFizzBuzz,
  isFizzy,
  isBuzzy,
  isLucky,
  isRangeInvalid,
} from '../fizzBuzz/helpers'

describe("the helpers should be working properly", () => {
  describe("getNumbers()", () => {
    test("returns an array", async () => {
      expect(Array.isArray(getNumbers(1,20))).toBe(true);
    });
    test("is the correct length", async () => {
      expect(getNumbers(1, 20).length).toBe(20);
      expect(getNumbers(12, 15).length).toBe(4);
      expect(getNumbers(1, 100).length).toBe(100);
    });
  });

  describe("isFizzBuzz()", () => {
    test("returns true if the number is divisible by 15", async () => {
      expect(isFizzBuzz(15)).toBe(true);
      expect(isFizzBuzz(30)).toBe(true);
      expect(isFizzBuzz(3000)).toBe(true);
    });
    test("returns false if the number is not divisible by 15", async () => {
      expect(isFizzBuzz(1)).toBe(false);
      expect(isFizzBuzz(16)).toBe(false);
      expect(isFizzBuzz(97)).toBe(false);
    });
  });

  describe("isBuzzy()", () => {
    test("returns true if the number is divisible by 5", async () => {
      expect(isBuzzy(5)).toBe(true);
      expect(isBuzzy(85)).toBe(true);
      expect(isBuzzy(500)).toBe(true);
    });
    test("returns false if the number is not divisible by 5", async () => {
      expect(isBuzzy(51)).toBe(false);
      expect(isBuzzy(88)).toBe(false);
      expect(isBuzzy(303)).toBe(false);
    });
  });

  describe("isFizzy()", () => {
    test("returns true if the number is divisible by 3", async () => {
      expect(isFizzy(3)).toBe(true);
      expect(isFizzy(33)).toBe(true);
      expect(isFizzy(450)).toBe(true);
    });
    test("returns false if the number is not divisible by 3", async () => {
      expect(isFizzy(11)).toBe(false);
      expect(isFizzy(131)).toBe(false);
      expect(isFizzy(998)).toBe(false);
    });
  });

  describe("isLucky()", () => {
    test("returns true if the number contains a 3", async () => {
      expect(isLucky(3)).toBe(true);
      expect(isLucky(300)).toBe(true);
      expect(isLucky(433)).toBe(true);
    });
    test("returns false if number does not contain a 3", async () => {
      expect(isLucky(4)).toBe(false);
      expect(isLucky(124)).toBe(false);
      expect(isLucky(666)).toBe(false);
    });
  });

  describe("isRangeInvalid()", () => {
    test("returns true if the first num is greater than the second num", async () => {
      expect(isRangeInvalid(2, 1)).toBe(true);
      expect(isRangeInvalid(20, 19)).toBe(true);
      expect(isRangeInvalid(12, 1)).toBe(true);
    });
    test("returns false if the first nnumber is less than or equal to the second number", async () => {
      expect(isRangeInvalid(1, 20)).toBe(false);
      expect(isRangeInvalid(19, 20)).toBe(false);
      expect(isRangeInvalid(100, 200)).toBe(false);
    })
  })
})

describe("the FizzBuzz component", () => {
  test("properly renders the input fields", async () => {
    const { unmount } = render(<FizzBuzz />);
    expect(screen.getByText("Start Number:")).toBeInTheDocument();
    expect(screen.getByText("End Number:")).toBeInTheDocument();
    unmount();
  });

  test("prepopulates the input fields", async () => {
    const { unmount } = render(<FizzBuzz />);
    expect(screen.getByPlaceholderText("1")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("20")).toBeInTheDocument();
    unmount();
  });

  test("renders the FizzBuzz report", () => {
    const { unmount } = render(<FizzBuzz />);
    expect(screen.getByText("fizz: 4")).toBeInTheDocument();
    expect(screen.getByText("buzz: 3")).toBeInTheDocument();
    expect(screen.getByText("fizzbuzz: 1")).toBeInTheDocument();
    expect(screen.getByText("lucky: 2")).toBeInTheDocument();
    expect(screen.getByText("integer: 10")).toBeInTheDocument();
    unmount();
  })
})