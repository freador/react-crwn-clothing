import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {connect} from 'react-redux';

import './collections-overview.styles.scss';
import {createStructuredSelector} from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (
  <div className='collection-overview'>
      {collections
        .filter((item, idx) => idx < 4)
        .map(item => {
          console.log(item)
           return(
            <CollectionItem key={item.id} item={item} />
           )
        }
          
        )}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
