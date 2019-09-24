import React from 'react';
import { useTrail, animated } from 'react-spring';

import data from '../data/inventory';
import selectedItems from '../data/selecteditems';

import MediaControlCard from './UserItemsList'

export default () => {
    const items = data.products.filter((product) => selectedItems.items.includes(product.name));
    const trail = useTrail(items.length, {
        top: 0,
        opacity: 1,
        from: { top: 40, opacity: 0  },
    });
    return <div>

        {trail.map(({top, opacity}, index) => (
            <animated.div
                key={items[index].name}
                className="trails-text"
                style={{transform: top.interpolate(x => `translate3d(0,${x}px,0)`), opacity }}>
                <MediaControlCard name={items[index].name} image={items[index].image} description={items[index].description}/>
            </animated.div>
        ))}
    </div>
}


