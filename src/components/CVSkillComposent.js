/**
 * Created by jphet on 23/05/2017.
 */
import React from "react";
import Star from "./Star";

export default class CVSkillComposent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {titre, skills} = this.props;
        const skillComposent  = skills.filter(skill => {
            return skill.degCon > 0;
        }).sort((skill1, skill2) =>{
            return skill2.degCon - skill1.degCon;
        }).map((skill) => {
            return <tr key={skill.description}>
                <td><Star degCon={skill.degCon}/> {skill.description}</td>
            </tr>;
        });
        return <table className="skillTable responsive-table centered bordered">
            <thead>
            <tr>
                <th>{titre}</th>
            </tr>
            </thead>
            <tbody>
            {skillComposent}
            </tbody>
        </table>
    }
}
