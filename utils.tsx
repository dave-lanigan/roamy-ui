import _ from 'lodash';


function cityNameFromTag (tag: string) {

    tag = tag.replace("-"," ")

    return( _.startCase(_.toLower(tag)) )
}

export {cityNameFromTag}