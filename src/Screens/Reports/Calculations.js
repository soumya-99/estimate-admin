export function calculate(data, flag) {
  var totals = [],
    taxable_amt = 0,
    cgst_amt = 0,
    sgst_amt = 0,
    total_tax = 0,
    qty = 0,
    price = 0,
    net_amt = 0,
    cancelled_amt = 0,
    no_of_bills = 0,
    initpay = 0,
    can_amt = 0,
    rec_amt = 0,
    due_amt = 0,
    paid_amt = 0,
    balance = 0,
    rcpt = 0;

  if (flag == "salereport") {
    data?.forEach((e) => (qty += e.qty));
    data?.forEach((e) => (price += e.price));
    data?.forEach((e) => (net_amt += e.net_amt));
    data?.forEach((e) => (taxable_amt += e.taxable_amt));
    data?.forEach((e) => (cgst_amt += e.cgst_amt));
    data?.forEach((e) => (sgst_amt += e.sgst_amt));
    data?.forEach((e) => (total_tax += e.total_tax));
    totals.push(
      qty.toFixed(2),
      price.toFixed(2),
      cgst_amt.toFixed(2),
      sgst_amt.toFixed(2),
      " ",
      net_amt.toFixed(2)
    );
  } else if (flag == "daybook") {
    data?.forEach((e) => (net_amt += e.net_amt));
    data?.forEach((e) => (cancelled_amt += e.cancelled_amt));
    totals.push(net_amt.toFixed(2), cancelled_amt.toFixed(2));
  } else if (flag == "cancelbill") {
    data?.forEach((e) => (qty += e.no_of_items));
    data?.forEach((e) => (price += e.price));
    data?.forEach((e) => (net_amt += e.net_amt));
    data?.forEach((e) => (taxable_amt += e.taxable_amt));
    data?.forEach((e) => (cgst_amt += e.cgst_amt));
    data?.forEach((e) => (sgst_amt += e.sgst_amt));
    data?.forEach((e) => (total_tax += e.total_tax));

    totals.push(
      qty.toFixed(2),
      price.toFixed(2),
      cgst_amt.toFixed(2),
      sgst_amt.toFixed(2),
      " ",
      net_amt.toFixed(2)
    );
  } else if (flag == "itemwisereport") {
    data?.forEach((e) => (qty += e.qty));

    data?.forEach((e) => (price += e.price));

    totals.push(qty.toFixed(2), price.toFixed(2));
  } else if (flag == "userwise") {
    data?.forEach((e) => (initpay += e.net_amt));
    data?.forEach((e) => (can_amt += e.cancelled_amt));
    data?.forEach((e) => (no_of_bills += e.no_of_receipts));
    totals.push(no_of_bills, initpay.toFixed(0), can_amt.toFixed(0));
  } else if (flag == "paymode") {
    data?.forEach((e) => (initpay += e.net_amt));
    data?.forEach((e) => (can_amt += e.can_amt));
    data?.forEach((e) => (rcpt += e.no_of_rcpt));

    totals.push(rcpt, initpay.toFixed(2), can_amt.toFixed(2));
  } else if (flag == "recoveryreport") {
    data?.forEach((e) => (rec_amt += e.recovery_amt));

    totals.push(rec_amt.toFixed(2));
  } else if (flag == "duereport") {
    data?.forEach((e) => (due_amt += e.due_amt));

    totals.push(due_amt.toFixed(2));
  } else if (flag == "customerledger") {
    data?.forEach((e) => (paid_amt += e.paid_amt));
    data?.forEach((e) => (due_amt += e.due_amt));
    data?.forEach((e) => (balance += e.balance));

    totals.push(paid_amt.toFixed(2), due_amt.toFixed(2), balance.toFixed(2));
  }

  return totals;
}
