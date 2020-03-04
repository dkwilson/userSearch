class Github {
    constructor(){
        this.client_id = '407770bc375ed48d209e';
        this.client_secret = 'f4c79741acab9138575635285270c6dba0f250c8';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch (`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_id_secret}`);

        const repoResponse = await fetch (`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}$client_id=${this.client_id}&client_secret${this.client_id_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}