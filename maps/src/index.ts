import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const user = new User();
const company = new Company();
const customMap = new Map('map');

// They satisfy the mappable interface (having a location with lat and lng) that map has 
customMap.addMarker(user);
customMap.addMarker(company);