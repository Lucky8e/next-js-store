"use client";
import { useState } from "react";
import SelectProductAmount from "../single-products/SelectProductAmount";
import { Mode } from "../single-products/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Button";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { toast } from "sonner";

function ThirdColumn({ id, quantity }: { id: string; quantity: number }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);
  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id
    });
    setAmount(value);
    toast(result.message);
    setIsLoading(false);
  };
  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" text="Remove Item" className="mt-4" />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
