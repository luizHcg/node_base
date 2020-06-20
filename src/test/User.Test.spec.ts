import User from '../model/User.Model'

test('it should be "test', () => {
  const user = new User()

  user.name = 'min'
  user.email = 'min@min.com'

  expect(user.Test()).toEqual('test')
})
