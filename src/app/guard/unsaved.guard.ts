import {ActivatedRoute, CanDeactivate} from '@angular/router';
import {ProductComponent} from "../product/product.component";
/**
 * Created by lenovo-pc on 2018/2/18.
 */
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm('You did not save,are you sure you want to leave? ');
  }
}
