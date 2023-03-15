/**
 * a demo to list the faker data
 */

import faker from 'faker'

const array = [...Array(1000)].map((item, index) => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
}));

array.forEach(item => {
    console.log(item);
});