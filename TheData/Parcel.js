import Database from './TheData';
import { STATUS_INTRANSIT } from './UT/types';

export default class Parcel extends Database {
  constructor({
    CollectionLocation,
    DeliveryLocation,
    weight,
    status,
  
  } = {}) {
    super('parcels');
    this.CollectionLocation=CollectionLocation;
    this.DeliveryLocation = DeliveryLocation;
    this.weight = weight;
    this.status =INTRANSIT;
  }
}
