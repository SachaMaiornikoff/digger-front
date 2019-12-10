import { shallow } from 'vue-test-utils'
import test from 'ava'

import GameListItem from '../../components/GameListItem'

test('It should render a div.', (t) => {
  const gameImage = {
    game: {
      id: 1,
      title: 'Test title',
      studio: 'test studio',
      releaseDate: '08/12/1994'
    },
    image: 'R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
  }
  const wrapper = shallow(GameListItem, {
    propsData: {
      gameImage
    }
  })

  t.true(wrapper.is('div'))
})
