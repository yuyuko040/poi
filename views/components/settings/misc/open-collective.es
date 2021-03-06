import React from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { range } from 'lodash'

import {
  layoutSelector,
  configLayoutSelector,
  configDoubleTabbedSelector,
} from 'views/utils/selectors'

const ceil = x => Math.ceil(x / 50) * 50

const openCollectiveWidthWidthSelector = createSelector(
  [
    layoutSelector,
    configLayoutSelector,
    configDoubleTabbedSelector,
  ], ({ webview, window }, layout, doubleTabbed) => {
    if (layout === 'horizontal') {
      if (doubleTabbed) {
        return window.width - webview.width - 40
      }
      return window.width - webview.width - 40
    }
    if (doubleTabbed) {
      return ceil(window.width / 2 - 40)
    }
    return window.width - 40
  }
)

export const OpenCollective = connect(state => ({
  width: openCollectiveWidthWidthSelector(state),
}))(({ width }) => (
  <>
    <div>
      {
        range(10).map(i => (
          <a
            href={`https://opencollective.com/poi/sponsor/${i}/website`}
            key={i}
          >
            <img src={`https://opencollective.com/poi/sponsor/${i}/avatar.svg`} />
          </a>
        ))
      }
    </div>
    <div>
      <a href="https://opencollective.com/poi#backers">
        <img src={`https://opencollective.com/poi/backers.svg?width=${width}`} />
      </a>
    </div>
  </>
))
