'use strict';
import React from 'react';

export default function() {
    return Html.call(this);
}

var Html = function() {
    return ( 
    	<span className="aa">
	      <span className={this.cls()}>{this.material_icon_text}</span>
	      <span>
		      <span className={this.badge_cls()}>{this.badge_text}</span>
	      </span>
      	</span>
    )
}
