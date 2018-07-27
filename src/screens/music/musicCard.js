import React, { Component } from "react";

import {
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  View
} from "native-base";
import styles from "./styles";
import queryString from 'query-string';

class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload() {
    //const mfsSeq = this.props.data._source.mfsSeq;
    const mfsSeq = 51137;
    //alert(mfsSeq);

    var param = {
      npn: "사춘기.mp3",
      mfsSeq: mfsSeq
    };

    var downloadUrl = "http://stisland.co.kr:3300/api/music/download?" + queryString.stringify(param);
    console.log(downloadUrl);

    let dirs = RNFetchBlob.fs.dirs
    var filePath = `${dirs.DownloadDir}/${param.npn}`;
    console.log(filePath);
  }

  render() {
    const { data } = this.props;

    const thumbUrl = (coverMD5) => {
      if (!coverMD5) {
        return "http://zuch2000.iptime.org/blog/images/icons/NoImage_256x256.png";
      }

      var retUrl = "http://zuch2000.iptime.org/blog/music-covers/thumb/";
      retUrl += coverMD5.substring(0, 2) + "/";
      retUrl += coverMD5 + ".png";
      return retUrl;
    }

    const trackLength = (sec) => {
      var hour = Math.floor(sec / 3600);
      var min = Math.floor(sec / 60);
      var sec = sec % 60;

      var ret = "";
      ret += hour > 0 ? hour + ":" : "";
      ret += min > 0 ? min + ":" : "";
      ret += sec > 0 ? sec : "";
      return ret;
    };

    const fileSize = (fSize) => {
      if (fSize > (1024 * 1024 * 1024)) {
        return (fSize / (1024 * 1024 * 1024)).toFixed(2) + " GB";
      }

      if (fSize > (1024 * 1024)) {
        return (fSize / (1024 * 1024)).toFixed(2) + " MB";
      }

      if (fSize > (1024)) {
        return (fSize / (1024)).toFixed(2) + " KB";
      }
      return fSize + "Byte";
    };

    return (
      <Card style={styles.mb}>
        <CardItem>
          <Left>
            <Thumbnail square large
              source={{ uri: thumbUrl(data._source.coverMD5) }}
            />
            <Body>
              <Text>{data._source.title}</Text>
              <Text note>{data._source.albumArtist}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem style={{ paddingVertical: 0 }}>
          <Body>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Icon name="md-stats" style={styles.musicInfoItemIcon} />
              <Text note style={styles.musicInfoItemText}>{data._source.channels} {data._source.bitRate} kbps</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Icon name="md-alarm" style={styles.musicInfoItemIcon} />
              <Text note style={styles.musicInfoItemText}>{trackLength(data._source.trackLength)}</Text>
              <Icon name="md-cloud-download" style={styles.musicInfoItemIcon} />
              <Text note style={styles.musicInfoItemText}>{fileSize(data._source.fileSize)}</Text>
            </View>
          </Body>
          <Right>
            <Button
              onPress={this.handleDownload}
            >
              <Text>Donwload</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

MusicCard.defaultProps = {
  data: {}
};

export default MusicCard;
