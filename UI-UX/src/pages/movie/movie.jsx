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
        <Video poster={contentData.img} crossOrigin="anonymous">
          <source
            data-src={contentData.video}
            type="video/mp4"
          />
          <track
            default
            kind="subtitles"
            src={contentData.subtitle.en}
            srcLang="en"
            label="English"
          />
          <track
            default
            kind="subtitles"
            src={contentData.subtitle.indo}
            srcLang="id"
            label="Indonesia"
          />
          <track
            default
            kind="subtitles"
            src={contentData.subtitle.vi}
            srcLang="vi"
            label="Vietnamese"
          />
        </Video>
      
        <DefaultUi noControls>
          <DefaultControls hideOnMouseLeave activeDuration={2000} />
        </DefaultUi>
      </Player>
    </div>
  );
}
