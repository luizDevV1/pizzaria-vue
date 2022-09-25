import {IBaseEntity} from "../shared/base-entity";
import {IItemsCost} from "../shared/items-cost";

/**
 * Use try catch
 */
export class ContentEntity implements IBaseEntity, IItemsCost {
  id: string | undefined;
  name!: string;
  price = 0;

  constructor(this_class: ContentEntity) {
    if (this_class.price <= 0) throw Error("Very low price");

    Object.assign(this, this_class);
  }
}
