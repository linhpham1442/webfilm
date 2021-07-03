var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

//Get category model
var Category = require('../models/category')

/*
 * GET category index
 */
router.get('/', function(req, res) {
    Category.find(function(err, categories) {
        res.render('admin/categories', {
            categories: categories,
            admintitle: 'Categories'
        });

    });
});

/*
 * GET add  category 
 */
router.get('/add-category', function(req, res) {
    var title = "";

    res.render('admin/add_category', {
        title: title,
        admintitle: 'Add category'
    })
});

/*
 * POST add page
 */
router.post('/add-category', [
    check('title', 'Title must have a value.').not().isEmpty()
], (req, res) => {
    var title = req.body.title;
    slug = title.replace(/\s+/g, '-').toLowerCase();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array()
        res.render('admin/add_category', {
            alert,
            title: title,
            slug: slug
        })
    } else {
        Category.findOne({ slug: slug }, function(err, category) {
            if (category) {
                req.flash('danger', 'Category slug exists, choose another.');
                res.render('admin/add_category', {
                    title: title,
                    slug: slug
                });
            } else {
                var category = new Category({
                    title: title,
                    slug: slug
                });
                category.save(function(err) {
                    if (err)
                        return console.log(err);
                    req.flash('Success', 'Category added!');
                    res.redirect('/admin/categories');
                })
            }
        })
    }
    // } else {
    //     res.send({});
    // }
    // if (errors) {
    //     console.log('error')
    //     res.render('admin/add_page', {
    //         errors: errors,
    //         title: title,
    //         slug: slug,
    //         content: content
    //     });
    // } else {
    //     console.log('success');
    // }
});

/*
 * GET edit category
 */
router.get('/edit-category/:id', function(req, res) {
    Category.findById(req.params.id, function(err, category) {
        if (err)
            return console.log(err);

        res.render('admin/edit_category', {
            title: category.title,
            id: category._id,
            admintitle: 'Edit category'
        });
    });


});

/*
 * POST edit category
 */
router.post('/edit-category/:id', [
    check('title', 'Title must have a value.').not().isEmpty(),
], (req, res) => {
    var title = req.body.title;
    slug = title.replace(/\s+/g, '-').toLowerCase();

    var id = req.params.id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array()
        res.render('admin/edit_category', {
            alert,
            title: title,
            id: id
        })
    } else {
        Category.findOne({ slug: slug, _id: { '$ne': id } }, function(err, category) {
            if (category) {
                req.flash('danger', 'Category title exists, choose another.');
                res.render('admin/edit_category', {
                    title: title,
                    id: id
                });
            } else {
                Category.findById(id, function(err, category) {
                    if (err) return console.log(err);
                    category.title = title;
                    category.slug = slug;
                    category.save(function(err) {
                        if (err)
                            return console.log(err);
                        req.flash('success', 'Category edited!');
                        res.redirect('/admin/categories/edit-category/' + id);
                    })
                })
            }
        })
    }
});
/*
 * GET delete pages index
 */
router.get('/delete-category/:id', function(req, res) {
    Category.findByIdAndRemove(req.params.id, function(err) {
        if (err) return console.log(err);

        req.flash('success', 'Category deleted!');
        res.redirect('/admin/categories/');
    })
});

//Exports
module.exports = router;