import removeItem from "./removeItem";
import data from "./data";

test("remove id_2", () => {
  const result = removeItem(data, "id_2_uniqe_object_id");
  console.log({ result });
  expect(result.length).toBe(1);
});

test("remove id_2_1_1", () => {
  const result = removeItem(data, "id_2_1_1_uniqe_object_id");
  console.log({ XYZ: result, data });
  console.log({
    XYZ: result.items[1].items[0].items[0],
    data: data.items[1].items[0].items[0],
  });
  // expect(result.length).toBe(2);

  // expect(result[1].items[0].length).toBe(1);
});
