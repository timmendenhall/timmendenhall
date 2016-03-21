import React from 'react';
import WorkItem from './WorkItem';
import skirmishScreenshot from '../../images/skirmish-screen-shot.png';
import { Link } from 'react-router'

class Work extends React.Component {

    renderWorkItems() {
        let workItems = [];

        workItems.push( 
            <WorkItem 
                link="/work/skirmish"
                title="Skirmish"
                description="Bacon ipsum dolor amet pancetta biltong spare ribs, sausage meatloaf kevin turkey ribeye tongue. Beef porchetta chuck, filet mignon pork loin meatloaf brisket swine tri-tip chicken strip steak alcatra drumstick. Shoulder short loin ground round sausage ribeye. Cupim corned beef ribeye, pancetta cow ball tip strip steak kielbasa chicken fatback meatball. Kevin spare ribs capicola biltong doner meatball, sausage tri-tip meatloaf boudin flank sirloin landjaeger ham. Strip steak jowl ham hock ball tip. Shankle doner flank pork chop bresaola capicola pastrami."/>
        );

        return workItems;
    }

    render() {
        return (
            <div>
                {this.renderWorkItems()}
            </div>
        );
    }
}

Work.defaultProps = {};

export default Work;
