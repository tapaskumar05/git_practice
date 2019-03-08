/** @jsx jsx */
import React from 'react';
import ButtonWithCSSProp from './EmotionFiles/Button';
import ButtonWithStyled from './EmotionFiles/ButtonWithStyled';
import ChangeStyleBasedOnProps from './EmotionFiles/ChangeStyleBasedOnProps';
import StylingComponent from './EmotionFiles/StylingComponent';
import GetValFromProps from './EmotionFiles/GetValFromProps';
import CustomizingPropForwading from './EmotionFiles/CustomizingPropForwading';
import TargetingAnotherEmotionComponent from './EmotionFiles/TargetingAnotherEmotionComponent';
import Composition from './EmotionFiles/Composition';
import ChildSelector from './EmotionFiles/ChildSelector';
import MediaQueries from './EmotionFiles/MediaQueries';
import Globals from './EmotionFiles/Globals';
import { css, jsx } from '@emotion/core'
import './App.css';

const AppStyle = css({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px'
})

class App extends React.Component {
  render() {
    return (
      <div className="App" css={AppStyle}>
        Emotion Js
        1.)Button With CSS Prop <ButtonWithCSSProp/>
        2.)Button With Styled <ButtonWithStyled/>
        3.)Button style based on Props <ChangeStyleBasedOnProps/>
        4.)Styling Any Component <StylingComponent/>
        5.)Targeting another emotion component <TargetingAnotherEmotionComponent/>
        6.)Getting Values from Props <GetValFromProps/>
        7.)Customizing Props Forwading <CustomizingPropForwading/>
        8.)Composition <Composition/>
        9.)Child Selector <ChildSelector/>
        10.)Media Queries <MediaQueries/>
        11.)Globals <Globals/>
      </div>
    );
  }
}

export default App;
