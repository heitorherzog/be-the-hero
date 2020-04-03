const gererateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () =>{
 it('should generate an unique ID', ()=>{

  const uniqueId = gererateUniqueId();
  expect(uniqueId).toHaveLength(8);

 });
});