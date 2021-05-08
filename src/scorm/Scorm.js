import { SCORM } from 'pipwerks-scorm-api-wrapper';
import { Component } from 'react';

class Scorm extends Component {
  constructor(props){
    super(props)
    SCORM.init();
  }

  getLearnerName() {
    return SCORM.get('cmi.core.student_name');
  }

  getStore(){
    let data = SCORM.get("cmi.suspend_data");
    if (data){
      return JSON.parse(data)
    }
    return [];
  }

  setStore(data){
    SCORM
      .set(
        "cmi.suspend_data", 
        JSON.stringify(data)
      );
  }

  updateScore(score){
    SCORM.set('cmi.core.score.raw', score)
    SCORM.set("cmi.core.score.min", 0)
    SCORM.set("cmi.core.score.max", 9)
  }

  finish() {
    console.log('you have finished!');
    SCORM.set('cmi.core.lesson_status', 'completed');
    SCORM.save();
  }
}

export default new Scorm();
