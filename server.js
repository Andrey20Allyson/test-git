import { CreatePeople } from "./server_core/module_example.js";

const ppls = [CreatePeople(), CreatePeople()]

ppls[0].name = 'ratinho'
ppls[1].sayHi(ppls[0])