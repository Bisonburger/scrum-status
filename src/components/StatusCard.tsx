import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faker from 'faker';
import * as React from 'react';
import Avatar from 'react-avatar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';

const TodayStatus = () => {
  return (
    <p>
      <span className="text-secondary font-weight-bold mr-2">TODAY:</span>
      {faker.lorem.lines(5)}
    </p>
  );
};

const YesterdayStatus = () => {
  return (
    <p>
      <span className="text-success font-weight-bold mr-2">YESTERDAY:</span>
      {faker.lorem.lines(5)}
    </p>
  );
};

const BlockerStatus = () => {
  return (
    <p>
      <span className="text-danger font-weight-bold mr-2">BLOCKERS:</span>
      {faker.lorem.lines(5)}
    </p>
  );
};

const GitCommits = () => {
  return (
    <a href="./#">
    <FontAwesomeIcon icon={["fab", "github"]} /> 2 commits to GitHub
  </a>
  );
};

const JiraIssues = () => {
  return (
    <a href="./#">
    <FontAwesomeIcon icon={["fab", "jira"]} /> 5 Jira issue
    updates
  </a>
  );
};

export const StatusCard = () => {
  return (
    <Card className="m-2">
      <Card.Body>
        <Media>
          <span className="mr-3 content-center">
            <Avatar
              email="matthew.young@bisonworks.com"
              size="64"
              round={true}
            />
          </span>
          <Media.Body>
            <TodayStatus />
            <YesterdayStatus />
            <BlockerStatus />
            <hr />
            <ul className="text-primary list-unstyled pl-0">
              <li><GitCommits /></li>
              <li><JiraIssues /></li>
            </ul>
            <div className="bg-light p-3 mt-3 text-primary">
              <span>
                <FontAwesomeIcon icon={["fas", "comment"]} /> 0 Comments
              </span>
              <Button className="float-right" variant="outline-primary">
                + <FontAwesomeIcon icon={["fas", "comment"]} />
              </Button>
            </div>
          </Media.Body>
        </Media>
      </Card.Body>
    </Card>
  );
};
