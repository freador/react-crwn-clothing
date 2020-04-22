import React from 'react';

import './collection.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item.component';

import {connect} from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors'
import { render } from 'react-dom';


const CollectionPage = ({collection}) => {
    
    
        
        
            if(collection != null){
                const {title, items } = collection;
                return(
                    <div className="collection">
                        <h2>
                        {title}                
                        </h2>
                        {items.map( item => ( <CollectionItem key={item.id} item={item}/>))}
                    </div>
                )
                
            }else{
                return(
                    <div>
                        <h2>Without products</h2>
                    </div>                    
                )
                
            }
                
            

        
    
}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);