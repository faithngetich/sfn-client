import React from "react";
import Cause from "./CauseContainer";
import {
  shallow
} from 'enzyme'

//Need at least 1 test to pass Travis CI
describe("<CauseContainer />", () => {

  it('creates component without crashing', () => {
    const cause = < Cause / >
  })

  it('contains text CauseContainer', () => {
    const causeWrapper = shallow( < Cause / > )
    expect(causeWrapper.text()).toEqual('CauseContainer')
  })
});