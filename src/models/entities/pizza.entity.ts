import { IBaseEntity } from "../shared/base-entity";
import { ENUM_PIZZA_SIZE } from "../util/enum-pizza-size";
import { ContentEntity } from "~entity/content.entity";
import { IItemsCost } from "@/models/shared/items-cost";

export default class PizzaEntity implements IBaseEntity, IItemsCost {
  id: string | undefined;

  contents: Array<ContentEntity> = [];
  name!: string;
  size!: ENUM_PIZZA_SIZE;
  readonly price!: number;

  constructor(this_class: Omit<PizzaEntity, "price">) {
    Object.assign(this, this_class);

    this.price = this.reduce_content_price(this.contents);
  }

  private reduce_content_price(arr: Array<ContentEntity>): number {
    const initial_value = 0;

    return (
      arr.reduce(
        (previous_value, current_value) => previous_value + current_value.price,
        initial_value
      ) * this.size
    );
  }
}
