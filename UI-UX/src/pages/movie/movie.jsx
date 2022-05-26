import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from 'react';

import '@vime/core/themes/default.css';
import {
  Video,
  Player,
  DefaultUi,
  DefaultControls,
  Settings,
  MenuItem,
  Submenu,
  MenuRadio,
  MenuRadioGroup,
} from '@vime/react';
import "./movie.scss";

export default function Movie() {
  const [value, setValue] = useState('1');

  // const onMenuItem1Click = () => {
  //   console.log('Clicked menu item 1');
  // };

  const onCheck = (e) => {
    const radio = e.target.value;
    setValue(radio.value);
  };

  const location = useLocation();
  const contentData = location.state.content;

  return (
    <div className="movie">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <Player>
        <Video crossOrigin="" >
          <source
            data-src={contentData.trailer}
            type="video/mp4"
          />
          <track
            default
            kind="subtitles"
            src="https://media.vimejs.com/subs/english.vtt"
            srcLang="en"
            label="English"
          />
        </Video>
      
        <DefaultUi noControls>
          <DefaultControls hideOnMouseLeave activeDuration={2000} />

          <Settings>
            <Submenu label="Movie Audio" hint="English" >
              <MenuRadioGroup value={value} onVmCheck={onCheck}>
                <MenuItem label="English" />
                <MenuItem label="French" />
                <MenuItem label="German" />
              </MenuRadioGroup>
            </Submenu>
            
            <Submenu label="Movie Speed" hint="normal" >
              <MenuRadioGroup value={value} onVmCheck={onCheck}>
                <MenuItem label="normal" value="1" />
                <MenuItem label="1.5x" value="2" />
                <MenuItem label="2x" value="3" />
              </MenuRadioGroup>
            </Submenu>

            <Submenu label="Movie Quality" hint="1080p">
              <MenuRadioGroup value={value} onVmCheck={onCheck}>
                <MenuRadio label="480p" value="1" />
                <MenuRadio label="720p" value="2" />
                <MenuRadio label="1080p" value="3" />
              </MenuRadioGroup>
            </Submenu>

            <Submenu label="Subtitles" hint="English">
              <MenuRadioGroup value={value} onVmCheck={onCheck}>
                <MenuItem label="English" />
                <MenuItem label="French" />
                <MenuItem label="German" />
              </MenuRadioGroup>
            </Submenu>

          </Settings>
        </DefaultUi>
      </Player>
    </div>
  );
}
