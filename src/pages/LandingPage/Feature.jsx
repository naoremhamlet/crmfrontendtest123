import React from 'react'
import FeatureBox from './FeatureBox';

const Feature = () => {
  return (
    <div id="features">
        <div className="a-container">
            <FeatureBox image="feature_3.png" title="Target with laser precision" description="200 filter attributes to personalize your engagement"/>
            <FeatureBox image="feature_2.png" title="Free to start" description="100% free starter plan, free trial for advanced plans"/>
            <FeatureBox image="feature_1.png" title="Workflows for higher engagement" description="Set up automated tasks, calls, and emails for a better reach"/>
        </div>

    </div>
  )
}

export default Feature