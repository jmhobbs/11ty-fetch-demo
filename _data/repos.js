const config = require('./config.json');

module.exports = async function () {
  const { Octokit } = await import('octokit');

  const octokit = new Octokit();

  const iterator = octokit.paginate.iterator(octokit.rest.repos.listForUser, {
    username: config.username,
    per_page: 50,
    sort: 'pushed',
  });

  const repos = [];

  for await (const page of iterator) {
    for( const repo of page.data) {
      if(repo.private) {
        continue
      }
      repos.push(repo);
    }
  }
  return repos;
};
