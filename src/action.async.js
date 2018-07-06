import { FETCH_CONFIG } from './helper.js'

export const getHtmlDocContent = (user, apiUrl, idWorkspace, idContent) =>
  fetch(`${apiUrl}/workspaces/${idWorkspace}/html-documents/${idContent}`, {
    headers: {
      ...FETCH_CONFIG.headers,
      'Authorization': 'Basic ' + user.auth
    },
    method: 'GET'
  })

export const getHtmlDocComment = (user, apiUrl, idWorkspace, idContent) =>
  fetch(`${apiUrl}/workspaces/${idWorkspace}/contents/${idContent}/comments`, {
    headers: {
      ...FETCH_CONFIG.headers,
      'Authorization': 'Basic ' + user.auth
    },
    method: 'GET'
  })

export const getHtmlDocRevision = (user, apiUrl, idWorkspace, idContent) =>
  fetch(`${apiUrl}/workspaces/${idWorkspace}/html-documents/${idContent}/revisions`, {
    headers: {
      ...FETCH_CONFIG.headers,
      'Authorization': 'Basic ' + user.auth
    },
    method: 'GET'
  })

export const postHtmlDocNewComment = (user, apiUrl, idWorkspace, idContent, newComment) =>
  fetch(`${apiUrl}/workspaces/${idWorkspace}/contents/${idContent}/comments`, {
    headers: {
      ...FETCH_CONFIG.headers,
      'Authorization': 'Basic ' + user.auth
    },
    method: 'POST',
    body: JSON.stringify({
      raw_content: newComment
    })
  })

export const putHtmlDocContent = (user, apiUrl, idWorkspace, idContent, label, newContent) =>
  fetch(`${apiUrl}/workspaces/${idWorkspace}/html-documents/${idContent}`, {
    headers: {
      ...FETCH_CONFIG.headers,
      'Authorization': 'Basic ' + user.auth
    },
    method: 'PUT',
    body: JSON.stringify({
      label: label,
      raw_content: newContent
    })
  })

export const putHtmlDocStatus = (user, apiUrl, idWorkspace, idContent, newStatus) =>
  fetch(`${apiUrl}/workspaces/${idWorkspace}/html-documents/${idContent}/status`, {
    headers: {
      ...FETCH_CONFIG.headers,
      'Authorization': 'Basic ' + user.auth
    },
    method: 'PUT',
    body: JSON.stringify({
      status: newStatus
    })
  })

export const postHtmlDocContent = (user, apiUrl, idWorkspace, idFolder, contentType, newContentName) =>
  fetch(`${apiUrl}/workspaces/${idWorkspace}/contents`, {
    headers: {
      ...FETCH_CONFIG.headers,
      'Authorization': 'Basic ' + user.auth
    },
    method: 'POST',
    body: JSON.stringify({
      parent_id: idFolder,
      content_type: contentType,
      label: newContentName
    })
  })
