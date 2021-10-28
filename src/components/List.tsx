import React, {FC} from 'react';

interface ListProps<T> {
    items:T[];
    renderItem: (item: T) => React.ReactNode
}


export default function List<T>(props: ListProps<T>){
    return (
        <div className='cards_style'>
            {props.items.map(props.renderItem)}
        </div>
    )
}