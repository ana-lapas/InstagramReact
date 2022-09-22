import React from 'react';
import Stories from './stories';
import Posts from './Posts';
import Sidebar from './sidebar';

export default function Corpo(){
    return(
        <div>
            <div class="container">
                <div class="colunaPrincipal">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
        </div>
    )
}
