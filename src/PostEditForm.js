import React, {useState} from "react";


//Form to edit existing post: renders only if setOnEdit staet is set as True
function PostEditForm ({post, setOnEditPage, editBlogPost, handleEditToggle}){

  const InitalFormData ={
    title: post.title,
    description: post.description,
    body: post.body
  }

  const [formData, setFormData] = useState(InitalFormData);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    editBlogPost({ ...formData, id: post.id, comments: { ...post.comments } });
    setOnEditPage(false);
  };


  return (
  <div>
    <section className="postFormArea">
      <div>
        <div>
          <div className="headerPost">Edit Post</div>
          <div>
            <form className="postForm">
              <div className="form-group"></div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <div>
                  <input
                    id="title"
                    name="title"
                    placeholder="titlte"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <div>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <div className="error description">
                    {formData.descriptionError}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <div>
                  <textarea
                    id="body"
                    name="body"
                    placeholder="body"
                    className="form-control"
                    value={formData.body}
                    onChange={handleChange}
                  />
                  <div className="error body">{formData.bodyError}</div>
                </div>
              </div>
              <div>
                <button onClick={handleEditSubmit} className="saveButton">
                  Save
                </button>
              </div>
              <button onClick={handleEditToggle} className="cancelButton">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}

export default PostEditForm;