import User from '@models/User.Model'

test('it should be "test', () => {
  const user = new User()

  user.name = 'min'
  user.email = 'min@min.com'

  expect(user.Test()).toEqual('test')
})
