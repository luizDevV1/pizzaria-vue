import { IBaseEntity } from "@/models/shared/base-entity";
import ClientRequestEntity from "~entity/client-request.entity";
import { IItemsCost } from "@/models/shared/items-cost";

export class ClientEntity implements IBaseEntity, IItemsCost {
  id: string | undefined;

  name?: string;
  table!: number;
  requests!: Array<ClientRequestEntity>;
  private readonly _price!: number;

  constructor(
    this_class: Pick<ClientEntity, "id" | "table" | "requests" | "name">
  ) {
    Object.assign(this, this_class);

    this._price = this.calc_price_all_request();
  }

  get price(): number {
    return this._price;
  }

  private calc_price_all_request(): number {
    const initial_value = 0;

    let result = 0;

    this.requests.forEach((pz) => {
      result += pz.pizzas
        .map((item) => item.price)
        .reduce(
          (previous_value, current_value) => previous_value + current_value,
          initial_value
        );
    });

    return result;
  }
}
