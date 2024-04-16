import mercadopago from "mercadopago";
import { MERCADOPAGO_API_KEY } from "../config.js";

export const createOrder = async (req, res) => {
  const { description, amount } = req.body;

  if (!description || !amount) {
    return res.status(400).json({ message: 'Falta la descripción o el monto en la solicitud.' });
  }
  
  mercadopago.configure({
    access_token: MERCADOPAGO_API_KEY,
  });

   try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: description,
          unit_price: parent(amount),
          currency_id: "COP",
          quantity: 1,
        },
      ]
    });

    res.json(result.body);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    if (payment.type === "payment") {
      const data = await mercadopage.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
