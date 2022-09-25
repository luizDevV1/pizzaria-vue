import { IBaseEntity } from "../shared/base-entity";
import PizzaEntity from "~entity/pizza.entity";
import { ENUM_PIZZA_STATUS } from "@/models/util/enum-pizza-status";

export default class ClientRequestEntity implements IBaseEntity {
  id: string | undefined;

  pizzas!: Array<PizzaEntity>;
  status: ENUM_PIZZA_STATUS = ENUM_PIZZA_STATUS.REQUEST;

  constructor(
    this_class: Pick<ClientRequestEntity, "id" | "pizzas" | "status">
  ) {
    Object.assign(this, this_class);
  }

  private _order_time: Date = new Date();

  get order_time(): Date {
    return this._order_time;
  }
}
