import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Main1 } from './Main1';
import { addLink } from './actions/linkAction';

function Font3() {
  return (
    <i class="fa fa-bed fa-3x"></i>
  )
}

class Hotel1 extends Component {
  onClick() {
      window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <div id="content1">
          <nav1>
            <div className="favorite">
              <div>
                <Main1 addFavsfavorite={() => this.props.addLink(
                  <ul><li><Font3 /><Link to="/DCVisitPlanner/Hotels/Hotel1"> Hotel Lombardy</Link></li></ul>)} />
              </div>
            </div>
          </nav1>
          <aside1>
          <div className="pic">
            <Font3 /> <br />
              <a href= "https://www.hotellombardy.com/" target="_blank" rel="noopener noreferrer">Website</a> <br/>
              <a href= "https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Directions</a> <br/>
          </div>
          </aside1>
          <header1>
            <h3>Hotel Lombardy</h3>
          </header1>
          <main1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat dapibus purus ac ultricies. Donec placerat porttitor scelerisque. Suspendisse placerat tristique nibh eu luctus. Fusce ultrices, lacus eu hendrerit lobortis, felis nisi porttitor diam, id pulvinar mi mauris sed eros. Sed nulla diam, placerat sed purus feugiat, dignissim suscipit tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent sit amet metus ut nunc gravida rutrum.<br /> <br />
            <div className="top" onClick={this.onClick}>Top of Page</div>
          </main1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      link: state.link
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLink: (favorites) => {
      dispatch(addLink(favorites));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hotel1);
