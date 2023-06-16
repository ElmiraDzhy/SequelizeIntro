module.exports.pagination = async (req, res, next) => {
    try {
        const {query} = req;
        console.log(query);
        const pg = Number(query.page);
        const pagination = {
            limit: 2,
        }
        pagination.offset = pg ? this.limit * (pg - 1) : 0;
        req.pagination = pagination;
        next();
    } catch (err) {
        next(err);
    }

}