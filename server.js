import { CreatePeople } from "./server_core/module_example.js";

const ppls = [CreatePeople(), CreatePeople()]

ppls[0].name = 'ratinho'
ppls[1].say('hi dude', ppls[0])

ppls.push(CreatePeople('hogo'), CreatePeople('jamersom'), CreatePeople('yuri'))

ppls[4].startAFriendshipWith(ppls[3])

ppls[4].sayToAllFriends('hi')